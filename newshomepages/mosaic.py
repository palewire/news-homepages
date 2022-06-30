import math
import random
from pathlib import Path

import click
from PIL import Image, ImageOps

from . import utils


@click.group()
def cli():
    """Create image mosaics."""
    pass


@cli.command()
@click.option("-i", "--input-dir", "input_dir", default="./")
@click.option("-o", "--output-dir", "output_dir", default="./")
def jpg(input_dir: str, output_dir: str):
    """Combine images into jpgs ready for Twitter."""
    # Get a list of images
    input_path = Path(input_dir)
    input_path.mkdir(parents=True, exist_ok=True)
    image_paths = list(input_path.glob("*.jpg"))
    click.echo(f"{len(image_paths)} images discovered in {input_path}")

    # Set the output path
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)

    n = 2
    slide_count = math.floor(len(image_paths) / (n * n))
    for i in range(slide_count):
        selected_images = []
        for _x in range(n * n):
            selected_images.append(image_paths.pop())

        size = (600, 388)
        shape = (n, n)

        # Open images and resize them
        width, height = size
        images = [
            ImageOps.fit(image, size, Image.Resampling.LANCZOS, centering=(0.5, 0))
            for image in map(Image.open, selected_images)
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

        # Save an output
        click.echo(f"Writing mosiac {i+1} to {output_path}")
        image.save(output_path / f"{i+1}.jpg", "JPEG")


@cli.command()
@click.option("-i", "--input-dir", "input_dir", default="./")
@click.option("-o", "--output-dir", "output_dir", default="./")
def gif(input_dir: str, output_dir: str):
    """Combine images into a mosaic GIF."""
    # Get a list of images
    input_path = Path(input_dir)
    input_path.mkdir(parents=True, exist_ok=True)
    image_paths = list(input_path.glob("*.jpg"))
    click.echo(f"{len(image_paths)} images discovered in {input_path}")

    # Set the output path
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)

    # Set the size of our grids and the number of slides
    n = 3
    slide_count = math.floor(len(image_paths) / (n * n))

    # Pull random images from our source list
    random_images = []
    for _i in range(slide_count):
        random.shuffle(image_paths)
        for _x in range(n * n):
            random_images.append(image_paths.pop())

    # Sort the images alphabetically
    sorted_images = sorted(random_images)

    slide_list = []
    for i, image_chunk in enumerate(utils.chunk(sorted_images, n * n)):
        click.echo(f"Creating slide {i+1}")

        size = list(map(math.floor, (600 / n, 338 / n)))
        shape = (n, n)

        # Open images and resize them
        width, height = size
        images = [
            ImageOps.fit(image, size, Image.Resampling.LANCZOS, centering=(0.5, 0))
            for image in map(Image.open, image_chunk)
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

        click.echo(f"Writing slide {i+1} to {output_path}")
        image.save(output_path / f"{i+1}.jpg", "JPEG")

        # Add to our master last
        slide_list.append(image)

    # Combine slides into a GIF
    click.echo(f"Writing GIF to {output_path / 'mosaic.gif'}")
    slide_list[0].save(
        output_path / "mosaic.gif",
        save_all=True,
        append_images=slide_list[1:],
        optimize=True,
        duration=1500,
        loop=0,
    )


if __name__ == "__main__":
    cli()
