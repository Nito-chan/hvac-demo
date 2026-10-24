"""Generate the neutral social image and favicon placeholders.

These are intentionally niche-neutral. Replace them with per-niche social
images when each demo gets its own production brand.
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"

INK = (8, 27, 38)
PANEL = (15, 47, 58)
PANEL_BORDER = (37, 79, 90)
SURFACE = (243, 248, 247)
MUTED = (157, 188, 192)
TEAL = (14, 124, 134)
TEAL_DARK = (10, 94, 102)
ORANGE = (255, 122, 69)


def load_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    candidates = [
        "C:/Windows/Fonts/arialbd.ttf" if bold else "C:/Windows/Fonts/arial.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
        if bold
        else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
        if bold
        else "/System/Library/Fonts/Supplemental/Arial.ttf",
    ]
    for candidate in candidates:
        path = Path(candidate)
        if path.exists():
            return ImageFont.truetype(str(path), size)
    return ImageFont.load_default(size=size)


def rounded_line(
    draw: ImageDraw.ImageDraw,
    start: tuple[int, int],
    end: tuple[int, int],
    fill: tuple[int, int, int],
    width: int,
) -> None:
    draw.line([start, end], fill=fill, width=width)
    radius = width / 2
    for x, y in (start, end):
        draw.ellipse(
            [x - radius, y - radius, x + radius, y + radius],
            fill=fill,
        )


def draw_mark(draw: ImageDraw.ImageDraw, x: int, y: int, size: int) -> None:
    draw.rounded_rectangle(
        [x, y, x + size, y + size],
        radius=size * 0.3,
        fill=TEAL,
    )
    scale = size / 40
    white = SURFACE
    rounded_line(
        draw,
        (x + 11 * scale, y + 22 * scale),
        (x + 20 * scale, y + 13 * scale),
        white,
        max(2, round(2.2 * scale)),
    )
    rounded_line(
        draw,
        (x + 20 * scale, y + 13 * scale),
        (x + 29 * scale, y + 22 * scale),
        white,
        max(2, round(2.2 * scale)),
    )
    rounded_line(
        draw,
        (x + 14 * scale, y + 23 * scale),
        (x + 14 * scale, y + 30 * scale),
        white,
        max(2, round(2.2 * scale)),
    )
    rounded_line(
        draw,
        (x + 14 * scale, y + 30 * scale),
        (x + 26 * scale, y + 30 * scale),
        white,
        max(2, round(2.2 * scale)),
    )
    draw.ellipse(
        [
            x + 27 * scale,
            y + 8 * scale,
            x + 33 * scale,
            y + 14 * scale,
        ],
        fill=ORANGE,
    )


def generate_og() -> None:
    image = Image.new("RGB", (1200, 630), INK)
    draw = ImageDraw.Draw(image)

    for x in range(0, 1200, 60):
        draw.line([(x, 0), (x, 630)], fill=(13, 37, 48), width=1)
    for y in range(0, 630, 60):
        draw.line([(0, y), (1200, y)], fill=(13, 37, 48), width=1)

    draw_mark(draw, 72, 58, 44)
    draw.text((132, 66), "HOME-SERVICE DEMO KIT", font=load_font(19, True), fill=SURFACE)
    draw.text(
        (132, 92),
        "Fictional demos · real lead flow",
        font=load_font(15),
        fill=MUTED,
    )

    draw.text(
        (72, 166),
        "CONFIG-DRIVEN · REGION-AWARE",
        font=load_font(17, True),
        fill=ORANGE,
    )

    headline = load_font(60, True)
    draw.text((72, 202), "Five local-service", font=headline, fill=SURFACE)
    draw.text((72, 270), "demos. One flow.", font=headline, fill=SURFACE)

    draw.text(
        (74, 366),
        "HVAC · Plumbing · Roofing · Electrician · Pest",
        font=load_font(23),
        fill=SURFACE,
    )
    draw.text(
        (74, 402),
        "United States + India · mobile first · WCAG AA",
        font=load_font(20),
        fill=MUTED,
    )

    pills = [
        ("US + INDIA", 170),
        ("NOINDEX DEMO", 186),
        ("MAKE AUTOMATION", 220),
    ]
    x = 74
    for label, width in pills:
        draw.rounded_rectangle(
            [x, 456, x + width, 494],
            radius=19,
            fill=(18, 55, 67),
            outline=(40, 86, 97),
        )
        draw.text((x + 18, 466), label, font=load_font(13, True), fill=MUTED)
        x += width + 12

    draw.text(
        (74, 566),
        "Fictional businesses · sample reviews · no real bookings",
        font=load_font(15),
        fill=(123, 156, 161),
    )

    panel = [690, 96, 1128, 534]
    draw.rounded_rectangle(panel, radius=30, fill=PANEL, outline=PANEL_BORDER, width=2)
    draw.text((722, 126), "LEAD FLOW", font=load_font(13, True), fill=ORANGE)

    rows = [
        ("Request", "validated on the server", TEAL, 170),
        ("Route", "emergency / standard", ORANGE, 252),
        ("Follow up", "review + feedback", TEAL, 334),
    ]
    for index, (title, copy, color, y) in enumerate(rows):
        if index < len(rows) - 1:
            draw.line([(748, y + 48), (748, y + 82)], fill=(52, 97, 106), width=2)
        draw.ellipse([730, y, 766, y + 36], fill=color)
        draw.text((782, y - 2), title, font=load_font(21, True), fill=SURFACE)
        draw.text((782, y + 26), copy, font=load_font(14), fill=MUTED)

    draw.rounded_rectangle(
        [730, 438, 920, 474],
        radius=18,
        fill=TEAL_DARK,
    )
    draw.text((748, 448), "DEMO MODE READY", font=load_font(12, True), fill=SURFACE)

    image.save(PUBLIC / "og.png", optimize=True)


def generate_favicon() -> None:
    size = 64
    image = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(image)
    draw.rounded_rectangle([0, 0, size, size], radius=16, fill=INK)
    rounded_line(draw, (14, 36), (32, 20), SURFACE, 4)
    rounded_line(draw, (32, 20), (50, 36), SURFACE, 4)
    rounded_line(draw, (21, 36), (21, 49), SURFACE, 4)
    rounded_line(draw, (21, 49), (43, 49), SURFACE, 4)
    rounded_line(draw, (43, 49), (43, 36), SURFACE, 4)
    draw.ellipse([43, 12, 53, 22], fill=ORANGE)

    image.save(
        PUBLIC / "favicon.ico",
        sizes=[(16, 16), (32, 32), (48, 48), (64, 64)],
    )


if __name__ == "__main__":
    PUBLIC.mkdir(parents=True, exist_ok=True)
    generate_og()
    generate_favicon()
    print("Wrote public/og.png and public/favicon.ico")
