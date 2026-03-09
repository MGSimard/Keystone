import { useMemo } from "react";

type TileType =
  | "colored-bg-large-dot"
  | "colored-bg-medium-dot"
  | "colored-bg-small-dot"
  | "transparent-bg-large-dot"
  | "transparent-bg-medium-dot"
  | "transparent-bg-small-dot"
  | "transparent-bg-no-dot"
  | "colored-bg-no-dot";

//TODO Potentially replace with svg file w/ x-repeat

interface FragmentedGradientProps {
  rows?: number;
  cols?: number;
  className?: string;
}

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function FragmentedGradient({ rows = 24, cols = 120, className = "" }: FragmentedGradientProps) {
  const tiles = useMemo(() => {
    const result: Array<Array<TileType>> = [];

    for (let row = 0; row < rows; row++) {
      const rowTiles: Array<TileType> = [];
      const progress = row / rows;
      const coloredProbability = 1 - progress * 1.2;

      for (let col = 0; col < cols; col++) {
        const seed = row * cols + col + 42;
        const rand = seededRandom(seed);
        const rand2 = seededRandom(seed + 1000);
        const rand3 = seededRandom(seed + 2000);

        const noise = seededRandom(seed + 3000) * 0.3 - 0.15;
        const adjustedProbability = coloredProbability + noise;

        if (rand < adjustedProbability) {
          if (rand2 < 0.2) {
            rowTiles.push("colored-bg-no-dot");
          } else if (rand3 < 0.5) {
            rowTiles.push("colored-bg-small-dot");
          } else if (rand3 < 0.8) {
            rowTiles.push("colored-bg-medium-dot");
          } else {
            rowTiles.push("colored-bg-large-dot");
          }
        } else {
          if (rand2 < 0.3) {
            rowTiles.push("transparent-bg-no-dot");
          } else if (rand3 < 0.4) {
            rowTiles.push("transparent-bg-small-dot");
          } else if (rand3 < 0.7) {
            rowTiles.push("transparent-bg-medium-dot");
          } else {
            rowTiles.push("transparent-bg-large-dot");
          }
        }
      }
      result.push(rowTiles);
    }

    return result;
  }, [rows, cols]);

  const renderTile = (type: TileType, row: number, col: number) => {
    const key = `${row}-${col}`;
    const baseStyle = {
      width: "100%",
      height: "100%",
      minWidth: 0,
      minHeight: 0,
    };

    const dotSizes = {
      large: "70%",
      medium: "45%",
      small: "25%",
    };

    const primary = "var(--landing-primary)";

    switch (type) {
      case "colored-bg-no-dot":
        return <div key={key} style={{ ...baseStyle, backgroundColor: primary }} />;

      case "colored-bg-large-dot":
        return (
          <div
            key={key}
            className="flex items-center justify-center"
            style={{ ...baseStyle, backgroundColor: primary }}>
            <div
              className="shrink-0 rounded-full"
              style={{
                width: dotSizes.large,
                aspectRatio: 1,
                backgroundColor: "var(--landing-background)",
              }}
            />
          </div>
        );

      case "colored-bg-medium-dot":
        return (
          <div
            key={key}
            className="flex items-center justify-center"
            style={{ ...baseStyle, backgroundColor: primary }}>
            <div
              className="shrink-0 rounded-full"
              style={{
                width: dotSizes.medium,
                aspectRatio: 1,
                backgroundColor: "var(--landing-background)",
              }}
            />
          </div>
        );

      case "colored-bg-small-dot":
        return (
          <div
            key={key}
            className="flex items-center justify-center"
            style={{ ...baseStyle, backgroundColor: primary }}>
            <div
              className="shrink-0 rounded-full"
              style={{
                width: dotSizes.small,
                aspectRatio: 1,
                backgroundColor: "var(--landing-background)",
              }}
            />
          </div>
        );

      case "transparent-bg-large-dot":
        return (
          <div
            key={key}
            className="flex items-center justify-center"
            style={{ ...baseStyle, backgroundColor: "transparent" }}>
            <div
              className="shrink-0 rounded-full"
              style={{
                width: dotSizes.large,
                aspectRatio: 1,
                backgroundColor: primary,
              }}
            />
          </div>
        );

      case "transparent-bg-medium-dot":
        return (
          <div
            key={key}
            className="flex items-center justify-center"
            style={{ ...baseStyle, backgroundColor: "transparent" }}>
            <div
              className="shrink-0 rounded-full"
              style={{
                width: dotSizes.medium,
                aspectRatio: 1,
                backgroundColor: primary,
              }}
            />
          </div>
        );

      case "transparent-bg-small-dot":
        return (
          <div
            key={key}
            className="flex items-center justify-center"
            style={{ ...baseStyle, backgroundColor: "transparent" }}>
            <div
              className="shrink-0 rounded-full"
              style={{
                width: dotSizes.small,
                aspectRatio: 1,
                backgroundColor: primary,
              }}
            />
          </div>
        );

      case "transparent-bg-no-dot":
      default:
        return <div key={key} style={{ ...baseStyle, backgroundColor: "transparent" }} />;
    }
  };

  return (
    <div
      className={`pointer-events-none w-full overflow-hidden ${className}`}
        style={{
          aspectRatio: `${cols} / ${rows}`,
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      aria-hidden>
      {tiles.map((row, rowIndex) => row.map((tile, colIndex) => renderTile(tile, rowIndex, colIndex)))}
    </div>
  );
}
