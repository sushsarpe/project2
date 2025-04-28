import ffmpeg

def compress_to_mp4(input_path, output_path, crf=23, preset='slow'):
    """
    Compress video into MP4 format with very high quality.
    
    Parameters:
    - input_path: Source video file path
    - output_path: Destination MP4 file path
    - crf: Constant Rate Factor (lower = better quality, 18-28 is typical)
    - preset: Compression speed vs file size tradeoff
    """
    try:
        (
            ffmpeg
            .input(input_path)
            .output(
                output_path,
                vcodec='libx264',  # H.264 codec
                crf=crf,
                preset=preset,
                acodec='aac',      # Good audio codec
                movflags='+faststart'  # Optimize for web streaming
            )
            .run()
        )
        print(f"Video compressed successfully to {output_path}")
    except ffmpeg.Error as e:
        print('Error occurred:', e)

# Example usage:
compress_to_mp4('wedd.mp4', 'output_compressed.mp4', crf=23, preset='slow')
