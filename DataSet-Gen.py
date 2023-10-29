import together
import json
import random
together.api_key = "2e96a353c02a9573abc5c69b846caa48c94b9a7a7206178243a72588641e5980"

import logging
logger = logging.getLogger("datasetgen")

def extract_lyrics_from_file(file_path):
    grouped_inputs = []
    input_datasets = []
    counter = 0
    with open(file_path, 'r') as file:
        for line in file:
            json_obj = json.loads(line)  
            text_data = json_obj.get('text', '')
            lyrics_start_idx = text_data.find('Lyrics: ')
            if text_data.find('Lyrics: None') != -1:
                continue
            if lyrics_start_idx != -1:
                lyrics = text_data[lyrics_start_idx+8:].split('\n')
                input_datasets.append(lyrics)
                counter += 1
                if counter == 5:
                    grouped_inputs.append(input_datasets.copy())
                    counter = 0
                    input_datasets = []
    return grouped_inputs

# Path to the JSON file
file_path = 'track_data.jsonl'
file_path2 = 'track_data2.jsonl'
file_name = 'llm_output.jsonl'
# Extracting lyrics from the file
lyrics_array = extract_lyrics_from_file(file_path)
lyrics_array2 = extract_lyrics_from_file(file_path2)
final_lyrics_array = lyrics_array + lyrics_array2
#print(lyrics_array)

system_prompt = "Create a generalized summary of these songs. Make sure it's written in a way that it's talking to the person that's listening to the songs. Like say that your vibe is xyz because of the characteristics that are in the song. Be creative, descriptive, and not specific to any one song. Don't mention any of the song names or artists. Be brief in your description. Include emojis. Make it a describe the people that would listen to the songs, rather than describe the songs themselves. Limit to one sentence!"
final_dataset = []

import time
for input in final_lyrics_array:
    finished = False
    try_num = 0

    formatted_prompt = f"{input}\n\n{system_prompt} [/INST]"

    while not finished:
        if try_num > 5:
            logger.critical(f"ERROR: {input}")
            continue
        try:
            output = together.Complete.create(model="togethercomputer/llama-2-70b-chat", prompt=formatted_prompt)
            finished = True
            try_num += 1
            print(output)
        except Exception:
            pass
    time.sleep(1)
    answer = output['output']['choices'][0]['text']

    with open(file_name, "a") as jsonl_file:
        final_dataset = {
                "text": f"""<s>[INST] SYS {system_prompt} <</SYS>> {input} [/INST] {answer} </s>[/INST]"""
            }
        jsonl_file.write(json.dumps(final_dataset) + "\n")

print(f"Data has been written to {file_name}")