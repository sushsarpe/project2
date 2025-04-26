from PIL import Image
import os

def convert_to_webp(input_folder, quality=95):
    for filename in os.listdir(input_folder):
        if filename.lower().endswith(".jpg") or filename.lower().endswith(".jpeg"):
            filepath = os.path.join(input_folder, filename)
            image = Image.open(filepath).convert("RGB")

            new_filename = os.path.splitext(filename)[0] + ".webp"
            new_filepath = os.path.join(input_folder, new_filename)

            image.save(new_filepath, "WEBP", quality=quality)  # 🔧 Adjust quality here (0–100)
            print(f"Converted: {filename} → {new_filename}")

# Usage
convert_to_webp("path/to/your/images")
