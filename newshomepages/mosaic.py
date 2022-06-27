import random
from pathlib import Path

import click
from PIL import Image, ImageOps


@click.command()
@click.option("-i", "--input-dir", "input_dir", default="./")
@click.option("-o", "--output-dir", "output_dir", default="./")
def cli(input_dir: str, output_dir: str):
    """Combine images into a mosaic."""
    # Get a list of images
    input_path = Path(input_dir)
    input_path.mkdir(parents=True, exist_ok=True)
    image_paths = list(input_path.glob("*.jpg"))
    click.echo(f"{len(image_paths)} images discovered in {input_path}")

    # Set the output path
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)

    n = 4
    slide_list = []
    for i in range(12):
        random.shuffle(image_paths)
        random_images = []
        for _x in range(n * n):
            random_images.append(image_paths.pop())

        size = (1300, 1300)
        shape = (n, n)

        # Open images and resize them
        width, height = size
        images = [
            ImageOps.fit(image, size, Image.Resampling.LANCZOS, centering=(0.5, 0))
            for image in map(Image.open, random_images)
        ]

        # Create canvas for the final image with total size
        shape = shape if shape else (1, len(images))
        image_size = (width * shape[1], height * shape[0])
        image = Image.new("RGB", image_size)

        # Paste images into final image
        for row in range(shape[0]):
            for col in range(shape[1]):
                offset = width * col, height * row
                idx = row * shape[1] + col
                image.paste(images[idx], offset)

        # Size down the image
        smaller_image = image.resize((1000, 1000))

        # Save an output
        click.echo(f"Writing mosiac {i+1} to {output_path}")
        smaller_image.save(output_path / f"mosaic-{i+1}.jpg", "JPEG")

        # Add to our master last
        slide_list.append(smaller_image)

    # Combine slides into a GIF
    click.echo(f"Writing GIF to {output_path / 'mosaic.gif'}")
    slide_list[0].save(
        output_path / "mosaic.gif",
        save_all=True,
        append_images=slide_list[1:],
        optimize=True,
        duration=1000,
        loop=0,
    )


if __name__ == "__main__":
    cli()
