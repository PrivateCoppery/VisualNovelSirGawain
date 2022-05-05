namespace Template {

    export async function scn_ExpWhatNot(): ƒS.SceneReturn { //Fs. um fudge story funktionen aufzurufen
        ƒS.Speech.setTickerDelays(20, 2);
        await ƒS.Character.show(characters.Crowley, characters.Crowley.pose.default, ƒS.positions.topcenter);
        await ƒS.update(1);
        console.log("NewSceneOrSomething*~");
        await ƒS.Speech.tell(characters.narrator, "Blepp~. Anything behind the blepp.Even more something else has been");
        await ƒS.Character.hide(characters.Crowley);
        await ƒS.Speech.tell(characters.Crowley, "- horse noises- Very christmasy horsenoises. Much festive. ");
        await ƒS.Speech.tell(characters.Morgana, "All the knighlty jollyness upon thee good sir");
        await ƒS.Character.show(characters.Morgana, characters.Morgana.pose.default, ƒS.positions.center);
        await ƒS.Speech.tell(characters.narrator, "And there must be a balconyí big enough to fit 6+ musician according to the text, thus we can make sure that such festivities and feasts were regular in Camelot");
        await ƒS.Speech.tell(characters.narrator, "And rich tarisian carpets too.");

        // let dial_options = {
        //         dia_yes: "-BLOODTHIRSTY NOISES-",
        //         dia_no: "-very christmasy peaceful noooises-",
        // };
        // let firstdial_options = await ƒS.Menu.getInput(dial_options, "individualCSSClass");
        let chopped_head = false;
        let x = 0;
        while (x >= 0) {
            x -= 1;
            let dial_options = {
                dia_yes: "-BLOODTHIRSTY NOISES-",
                dia_no: "-very christmasy peaceful noooises-",
                dia_teleport: " SWOOOOOOOOOOSHHHH~",
            };
            let firstdial_options = await ƒS.Menu.getInput(dial_options, "individualCSSClass");


            switch (firstdial_options) {
                case dial_options.dia_yes:
                    await ƒS.Speech.tell(characters.narrator, "Oh no, you brutally chopped off the knights head!!!");
                    // return scn_ExpWhatNot();
                    break;
                case dial_options.dia_no:
                    await ƒS.Speech.tell(characters.narrator, "Yep, you kind of still chopped off his head, but wasnt happy about it. Or maybe an arm?");
                    chopped_head = true;
                    break;
                case dial_options.dia_teleport:
                    return scn_teleport();
                default:
                    await ƒS.Speech.tell(characters.narrator, "You kept eating cabbage soup. ");
                    break;
            }
        }
        if (chopped_head) {
            await ƒS.Speech.tell(characters.narrator, "You set off to the forest. It's winter. It's the 12th century. You are an idiot. ");
            let dial_options = {
                dia_yes: "I'm hungry. I'll eat my boots. (and maybe curse to this quest)",
                dia_no: "I'm hungry but I'm idiotically righteous, so I prey to not to have to eat my boots. ",
            };
            let firstdial_options = await ƒS.Menu.getInput(dial_options, "individualCSSClass");


            switch (firstdial_options) {
                case dial_options.dia_yes:
                    await ƒS.Speech.tell(characters.narrator, "You ate your boots!!! And cursed yer quest! STRAYIN OFF THE PATH OF A KNIGHT GASSSSSPPP");
                    return scn_hautdesert();
                    break;
                case dial_options.dia_no:
                    await ƒS.Speech.tell(characters.narrator, "-righteous and religious noises. You resist munching your belt too. ");
                    chopped_head = true;
                    return scn_hautdesert();
                    break;
                default:
                    await ƒS.Speech.tell(characters.narrator, "You eat the horse. ");
                    break;
            }
        }

    }
}