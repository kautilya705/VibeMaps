import together
import random
import wandb

together.api_key = "2e96a353c02a9573abc5c69b846caa48c94b9a7a7206178243a72588641e5980"
upload = together.Files.upload(file="dataset.jsonl", check=True)
#resp = together.Files.check(file="track_data.jsonl")
file_id = upload["id"]
llama = "togethercomputer/llama-2-13b-chat"

fine_tune = together.Finetune.create(
  training_file = file_id,
  model = llama,
  n_epochs = 10,
  n_checkpoints = 10,
  batch_size = 5,
  learning_rate = 1e-5,
  suffix = 'my-demo-finetune',
  wandb_api_key = '3594484074dd6c68b38e82ed72d2ee00fcf93ce5',  # Replace with your actual WandB API key
)

fine_tune_id = fine_tune['id']

print(together.Finetune.retrieve(fine_tune_id=fine_tune_id)) # retrieves information on finetune event
print(together.Finetune.get_job_status(fine_tune_id=fine_tune_id)) # pending, running, completed
print(together.Finetune.is_final_model_available(fine_tune_id=fine_tune_id)) # True, False
print(together.Finetune.get_checkpoints(fine_tune_id=fine_tune_id)) # list of checkpoints

