import os

def rename_images_in_subfolders(root_folder):
    for folder_path, subfolders, files in os.walk(root_folder):
        image_extensions = ('.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff')
        image_files = [file for file in files if file.lower().endswith(image_extensions)]

        # Skip the root folder if you don’t want to rename files directly in it
        if folder_path == root_folder:
            continue

        # Extract subfolder name from the path
        subfolder_name = os.path.basename(folder_path)

        for index, image_file in enumerate(image_files, start=1):
            old_file_path = os.path.join(folder_path, image_file)
            file_ext = os.path.splitext(image_file)[1]
            new_file_name = f"{subfolder_name}_image_{index}{file_ext}"
            new_file_path = os.path.join(folder_path, new_file_name)

            try:
                os.rename(old_file_path, new_file_path)
                print(f"Renamed '{image_file}' to '{new_file_name}' in folder '{folder_path}'")
            except Exception as e:
                print(f"Failed to rename '{image_file}': {e}")

# Example usage
root_folder = 'images'  # Replace with your root folder path
rename_images_in_subfolders(root_folder)
