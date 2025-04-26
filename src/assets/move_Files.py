import os
import shutil

# List of source folders containing the .jpg files
source_folders = [
    'images/outdoor',
    'images/ENGAGEMENT',
    'images/portraits',
    'images/HALDI',
    'images/Candidshots'
]

# Destination folder
destination_folder = 'images/ALL'


# Move only .jpg files
for folder in source_folders:
    for filename in os.listdir(folder):
        if filename.lower().endswith('.jpg'):
            src_path = os.path.join(folder, filename)
            dest_path = os.path.join(destination_folder, filename)

            # Avoid filename conflicts
            base, extension = os.path.splitext(filename)
            counter = 1
            while os.path.exists(dest_path):
                dest_path = os.path.join(destination_folder, f"{base}_{counter}{extension}")
                counter += 1

            shutil.move(src_path, dest_path)
            print(f"Moved: {src_path} -> {dest_path}")
