# Light Blue Water Power Nodes

A small Mindustry mod for **Build 160.7**. It lets the original Serpulo **Power Node** and **Large Power Node** be built on shallow and deep liquid terrain and recolors their bodies and menu icons light blue.

## Features

- Both small and large original power nodes support liquid terrain.
- Original silhouettes, transparency and shading are retained.
- Small Power Node laser range is 7, targeting six empty tiles between nodes; test horizontal and vertical placement in-game.
- Large Power Node range, laser colors, connection limits, resource costs and other placement rules remain unchanged.
- Beam Nodes and Surge Towers are not modified.

## Install

In Mindustry → Mods → Import from GitHub, enter `jerry3547/mindustry-light-blue-power-nodes`. Alternatively download this repository as a ZIP (Code → Download ZIP), then use Mods → Import Mod. Restart the game. Remove an older `power-node-water` version before importing; do not enable both.

## Compatibility and testing

Version **0.1.4**, target **Mindustry 160.7**, minimum build metadata **160**. The author tested the previous light-blue version and reported that it works. The range change in 0.1.4 still requires gameplay testing. Other game builds have not been verified. For multiplayer, use matching mods on all relevant clients and the server.

Try a separate sandbox map first: test both sizes on land, shallow water and deep water, occupied tiles and power connections. Other game placement restrictions still apply.

## Implementation

`scripts/main.js` changes `placeableLiquid` on the original blocks. On client load it recolors copies of the game's own sprites, without replacing building types. A recolor error is logged and water placement remains enabled. No game sprite files are bundled.

## Credits

Built for Jerry with assistance from ChatGPT. Mindustry and its original artwork belong to their respective authors. This is an unofficial mod.
