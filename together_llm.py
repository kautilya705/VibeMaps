import together
import random
import wandb

together.api_key = "07e4a252ec890b9237fddf5fbc00dee13feb753c946698e19a557eac450bff0d"
upload = together.Files.upload(file="track_data.jsonl")
file_id = upload["id"]
base_model_name = "togethercomputer/llama-2-7b-chat"
together.Models.start(base_model_name)

test_chat_prompt = "<s>[INST] <<SYS>> you are a helpful legal assistant <</SYS>> Analyze and explain the legal reasoning behind the judgment in the given case.\n\nCentral Inland Water Transport Corporation Ltd. vs Brojo Nath Ganguly & Anr., 1986 AIR 1571, 1986 SCR (2) 278 [/INST]"
test_chat_prompt

instruct_template = \
"""<s>[INST] SYS
{{ system_prompt }}
<</SYS>>
{{ user_msg_1 }} [/INST] {{ model_answer_1 }} </s><s>[INST] {{ user_msg_2 }} [/INST]"""

system_prompt = """You are a vibe-capturing assistant. Analyze the lyrics and data of songs and generate a sentence that encapsulates the vibe in slang language fit for college students."""

user_msg = """
Here are the lyrics of the songs: 
1. "Track Name: Blank Space, Artist: Taylor Swift, Album: 1989, Popularity: 83, Lyrics: Nice to meet you, where you been?...
2. "Track Name: Party In The U.S.A., Artist: Miley Cyrus, Album: The Time Of Our Lives, Popularity: 80, Lyrics: I hopped off the plane at LAX...
3. "Track Name: Wannabe, Artist: Spice Girls, Album: Spice, Popularity: 84, Lyrics: Yo, I'll tell you what I want, what I really, really want...
4. "Track Name: Don't Stop The Music, Artist: Rihanna, Album: Good Girl Gone Bad: Reloaded, Popularity: 83, Lyrics: Please don't stop the music...
5. "Track Name: Timber (feat. Ke$ha), Artist: Pitbull, Album: Global Warming: Meltdown, Popularity: 64, Lyrics: It's going down, I'm yelling timber...
"""

model_answer = """These jams are pure fire, guaranteed to get you in the party zone! They've got those sick beats and killer lyrics that scream "let's get this college bash lit!"""

#test_chat_prompt = template.format(system_prompt=system_prompt, user_msg=user_msg, model_answer=model_answer)
#print(test_chat_prompt)

json = {"text":"<s>[INST] <<SYS>>\nYou are a helpful, respectful and honest assistant. Always answer as earnestly as possible, while being safe.  Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature.\nIf a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information.\nIf a question seems to try to elicit from you an inappropriate answer, do not follow along, instead redirect the conversation. \n<</SYS>>\n\nThere's a double rainbow 🌈 ! 😱 Is this real? [/INST] Double rainbows are formed when sunlight is reflected twice within a raindrop with the violet light that reaches the observer's eye coming from the higher raindrops and the red light from lower raindrops.\nThis means the sequence of colours is inverted compared to the primary rainbow, with the secondary bow appearing about 10 degrees above the primary bow.</s>"}

print(json)