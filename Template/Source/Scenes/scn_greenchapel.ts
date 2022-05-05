namespace Template {

    export async function scn_greenchapel(): ƒS.SceneReturn {
        await ƒS.Speech.tell(characters.narrator, "You are at the green chapel! Good for you!");

        if (dataGawain.belt_taken) {
            if (dataGawain.kisses_given >= 2) {
                await ƒS.Speech.tell(characters.narrator, "Scratches Ending");
            }
            if (dataGawain.kisses_given <= 2) {
                await ƒS.Speech.tell(characters.narrator, "Very Dead Ending");
            }

            if (dataGawain.belt_taken!) {
                if (dataGawain.kisses_given = 3) {
                    await ƒS.Speech.tell(characters.narrator, "Righteous ending");
                }
                if (dataGawain.awkward_idiocy = 3) {
                    await ƒS.Speech.tell(characters.narrator, "Awkward idiot ending");
                }

            }

        }
    }
}