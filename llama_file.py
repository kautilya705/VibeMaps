import together

together.api_key = "07e4a252ec890b9237fddf5fbc00dee13feb753c946698e19a557eac450bff0d"
upload = together.Files.upload(file="llm_output.jsonl", check=True)
file_id = upload["id"]
llama = "togethercomputer/llama-2-13b-chat"

fine_tune = together.Finetune.create(
  training_file = file_id,
  model = llama,
  n_epochs = 10,
  n_checkpoints = 10,
  batch_size = 5,
  learning_rate = 1e-5,
  suffix = 'final_testing_demo',
  wandb_api_key = '03bdb3bdcc839ff44f83171c3964475a340ffb92',  # Replace with your actual WandB API key
)

fine_tune_id = fine_tune['id']
print(together.Finetune.retrieve(fine_tune_id=fine_tune_id)) # retrieves information on finetune event
print(together.Finetune.get_job_status(fine_tune_id=fine_tune_id)) # pending, running, completed
print(together.Finetune.is_final_model_available(fine_tune_id=fine_tune_id)) # True, False
print(together.Finetune.get_checkpoints(fine_tune_id=fine_tune_id)) # list of checkpoints
