function solution(bandage, health, attacks) {
    const attackTimes = new Set(attacks.map(e => e[0]));
    const iterations = attacks[attacks.length - 1][0];
    let bandageTime = 0;
    let nowHealth = health;

    for (let i = 1; i <= iterations; i++) {
        if (attackTimes.has(i)) {
            nowHealth -= attacks.shift()[1];
            if (nowHealth <= 0) return -1;
            bandageTime = 0;
            continue;
        }

        if (++bandageTime === bandage[0]) {
            nowHealth += bandage[2] + bandage[1];
            bandageTime = 0;
        } else {
            nowHealth += bandage[1];
        }

        if (nowHealth > health) nowHealth = health;
    }

    return nowHealth;
}