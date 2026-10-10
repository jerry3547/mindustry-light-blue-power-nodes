// Keep the original nodes and their behavior; permit liquid terrain.
const blocks = Packages.mindustry.content.Blocks;
const nodes = [blocks.powerNode, blocks.powerNodeLarge];
for (let i = 0; i < nodes.length; i++) nodes[i].placeableLiquid = true;

// Recolor copies of the game's own sprites after client assets are loaded.
// No buildType replacement: connections and saved buildings stay original.
const blueTextures = [];
Events.on(ClientLoadEvent, cons(function () {
    if (Vars.headless) return;
    const Texture = Packages.arc.graphics.Texture;
    const TextureRegion = Packages.arc.graphics.g2d.TextureRegion;
    const Color = Packages.arc.graphics.Color;
    const pixel = new Color();
    for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        try {
            const pixmap = Core.atlas.getPixmap(node.region).crop();
            for (let y = 0; y < pixmap.height; y++) {
                for (let x = 0; x < pixmap.width; x++) {
                    pixel.set(pixmap.get(x, y));
                    if (pixel.a === 0) continue;
                    // Preserve alpha and shading, shift body toward light blue.
                    const shade = (pixel.r + pixel.g + pixel.b) / 3;
                    pixel.r = shade * 0.55;
                    pixel.g = shade * 0.82;
                    pixel.b = Math.min(1, shade * 1.12);
                    pixmap.set(x, y, pixel);
                }
            }
            const texture = new Texture(pixmap);
            blueTextures.push(texture);
            pixmap.dispose();
            const region = new TextureRegion(texture);
            node.region = region;
            node.uiIcon = region;
            node.fullIcon = region;
        } catch (error) {
            Log.err("Power Node blue recolor failed for " + node.name + ": " + error);
        }
    }
}));
