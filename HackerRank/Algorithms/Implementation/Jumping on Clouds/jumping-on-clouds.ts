export default function jumpingOnClouds(clouds: Array<number>) {
    let idx = 0;
    let moves = 0;

    while (idx < clouds.length - 1) {
        if (clouds[idx + 2] === 0) {
            ++moves;
            idx += 2;
            continue;
        }

        // If skipping doesn't work, then the next one will always work.
        ++moves;
        ++idx;
    }

    return moves;
}
