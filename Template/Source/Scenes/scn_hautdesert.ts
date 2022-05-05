namespace Template {

    export async function scn_hautdesert(): ƒS.SceneReturn {
        await ƒS.Speech.tell(characters.narrator, "Unexpected castle! Not sus at all! YAY!");
        await ƒS.Speech.tell(characters.narrator, "Castle things happen");


        let dial_options = {
            dia_yes: "Lie. Lie.Lie. Absolutely and very much lie.",
            dia_no: "Don't explain but be righteous",
            dia_awkward: " Do you really want to awkwardly explain? ",
        };
        let firstday_options = await ƒS.Menu.getInput(dial_options, "individualCSSClass");

        switch (firstday_options) {
            case dial_options.dia_yes:
                await ƒS.Speech.tell(characters.narrator, "I only got this cookie, here. ");
                dataGawain.lies_told += 1;
                break;
            case dial_options.dia_no:
                await ƒS.Speech.tell(characters.narrator, "A very friendly kiss to Lord Bercilac");
                dataGawain.kisses_given += 1;
                break;
            case dial_options.dia_awkward:
                await ƒS.Speech.tell(characters.narrator, "Erm, so you know, your wife kind of tried to seduce me and stuff.... ");
                dataGawain.awkward_idiocy += 1; 
            default:
                await ƒS.Speech.tell(characters.narrator, "I seriously have no idea what are you doing. ");
                break;
        }
        await ƒS.Speech.tell(characters.narrator, "Second day happens.");

        let dial2_options = {
            dia_yes: "Lie. Lie.Lie. Again",
            dia_no: " Huh, you are being righteous. ",
            dia_awkward: " Hm. More humiliation, good sir? ",
        };
        let secondday_options = await ƒS.Menu.getInput(dial2_options, "individualCSSClass");

        switch (secondday_options) {
            case dial2_options.dia_yes:
                await ƒS.Speech.tell(characters.narrator, "I only got this func_GawaingetRandomCastleObject , here. ");
                dataGawain.lies_told += 1;
                break;
            case dial2_options.dia_no:
                await ƒS.Speech.tell(characters.narrator, "A very friendly kiss to Lord Bercilac. Handsome guy he is.");
                dataGawain.kisses_given += 1;
                break;
            case dial2_options.dia_awkward:
                await ƒS.Speech.tell(characters.narrator, "ERM. Your wife is back at it? is it fine with you and stuff?.... ");
                dataGawain.awkward_idiocy += 1; 
                break;
            default:
                await ƒS.Speech.tell(characters.narrator, "I seriously have no idea what are you doing. ");
                break;
    }
    await ƒS.Speech.tell(characters.narrator, "Second day happens.");

        let dial3_options = {
            dia_yes: "Lie and KEEP THE SUS BELT",
            dia_veryno: "Admit belt. Give kiss. ",
            dia_no: " Yeh, well. Give a kiss, and hide the belt. ",
            dia_awkward: " I'm here for suffering ",
        };
        let thirdday_options = await ƒS.Menu.getInput(dial3_options, "individualCSSClass");

        switch (thirdday_options) {
            case dial3_options.dia_yes:
                await ƒS.Speech.tell(characters.narrator, "Nothing happened, good Lord. N O T H I N G - nervous laughter-");
                dataGawain.lies_told += 1;
                dataGawain.belt_taken = true;
                return scn_greenchapel();
                break;
            case dial3_options.dia_veryno:
                await ƒS.Speech.tell(characters.narrator, "seriously, that beard *is* really impressive, right? and you are The Righteousness. Good work! One might say you are an idiot, but hey.");
                dataGawain.kisses_given += 1;
                return scn_greenchapel();
                break;
            case dial3_options.dia_no:
                await ƒS.Speech.tell(characters.narrator, " Okay, so at least give a kiss. And feel ashamed. C-c-c-c.  ");
                dataGawain.kisses_given += 1;
                dataGawain.lies_told += 1;
                dataGawain.belt_taken = true;
                return scn_greenchapel();
                break;
            case dial3_options.dia_awkward:
                await ƒS.Speech.tell(characters.narrator, "Okay, okay, FINE YOU PROBABLY KNOW IT ALREADY ");
                dataGawain.awkward_idiocy += 1; 
                return scn_greenchapel();
            default:
                await ƒS.Speech.tell(characters.narrator, "I seriously have no idea what are you doing. ");
                break;
        }
}
}