/**
 * Monstruo más rápido al que vencer para ganar
 */
class Boss extends Opponent {
    /**
     * @param game {Game} la instancia del juego a la que pertenece el oponente final
     */
    constructor (game) {
        const speed = OPPONENT_SPEED * 2,
            myImage = BOSS_PICTURE,
            myImageDead = BOSS_PICTURE_DEAD;

        super(game, speed, myImage, myImageDead);
    }
}