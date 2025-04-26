import os

# 📁 Set the path to your folder
folder_path = 'path/to/your/images'
base_name = 'image'  # 🔤 New base name for files
supported_extensions = ('.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp')  # ✅ Common image formats

# 🔁 Loop through and rename images
def rename_images(folder_path, base_name):
    if not os.path.exists(folder_path):
        print("Folder does not exist!")
        return

    files = [f for f in os.listdir(folder_path) if f.lower().endswith(supported_extensions)]
    files.sort()  # Optional: sort for consistent renaming

    for i, filename in enumerate(files, start=1):
        ext = os.path.splitext(filename)[1]
        new_name = f"{base_name}_{i}{ext}"
        old_path = os.path.join(folder_path, filename)
        new_path = os.path.join(folder_path, new_name)

        os.rename(old_path, new_path)
        print(f"Renamed: {filename} → {new_name}")

# 🔧 Run the function
rename_images(folder_path, base_name)
