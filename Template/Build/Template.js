"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Template.scn_ExpWhatNot, name: "Scene" }
        ];
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.characters = {
        narrator: {
            name: ""
        },
        Morgana: {
            name: "Not your local pole dancer tiefling you are mistaken, just a regular death fairy.",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Assets/characters/spr_morgana_default.png",
            }
        },
        Crowley: {
            name: "Crowley <3",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Assets/characters/crowley.png",
            }
        },
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.dataForSave = {
        nameProtagonist: "",
        points: 0,
        scoreeyyy: 9,
        varHadTea: false,
        // started: false,
        // ended: false
    };
    Template.dataGawain = {
        cursed_quest: false,
        belt_taken: false,
        head_chopped: false,
        kisses_given: 0,
        lies_told: 0,
        awkward_idiocy: 0,
    };
    Template.dataMorgana = {
        teleported: false,
        disguised: true,
        head_chopped: false,
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_ExpWhatNot() {
        Template.ƒS.Speech.setTickerDelays(20, 2);
        await Template.ƒS.Character.show(Template.characters.Crowley, Template.characters.Crowley.pose.default, Template.ƒS.positions.topcenter);
        await Template.ƒS.update(1);
        console.log("NewSceneOrSomething*~");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Blepp~. Anything behind the blepp.Even more something else has been");
        await Template.ƒS.Character.hide(Template.characters.Crowley);
        await Template.ƒS.Speech.tell(Template.characters.Crowley, "- horse noises- Very christmasy horsenoises. Much festive. ");
        await Template.ƒS.Speech.tell(Template.characters.Morgana, "All the knighlty jollyness upon thee good sir");
        await Template.ƒS.Character.show(Template.characters.Morgana, Template.characters.Morgana.pose.default, Template.ƒS.positions.center);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "And there must be a balconyí big enough to fit 6+ musician according to the text, thus we can make sure that such festivities and feasts were regular in Camelot");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "And rich tarisian carpets too.");
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
            let firstdial_options = await Template.ƒS.Menu.getInput(dial_options, "individualCSSClass");
            switch (firstdial_options) {
                case dial_options.dia_yes:
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Oh no, you brutally chopped off the knights head!!!");
                    // return scn_ExpWhatNot();
                    break;
                case dial_options.dia_no:
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Yep, you kind of still chopped off his head, but wasnt happy about it. Or maybe an arm?");
                    chopped_head = true;
                    break;
                case dial_options.dia_teleport:
                    return Template.scn_teleport();
                default:
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "You kept eating cabbage soup. ");
                    break;
            }
        }
        if (chopped_head) {
            await Template.ƒS.Speech.tell(Template.characters.narrator, "You set off to the forest. It's winter. It's the 12th century. You are an idiot. ");
            let dial_options = {
                dia_yes: "I'm hungry. I'll eat my boots. (and maybe curse to this quest)",
                dia_no: "I'm hungry but I'm idiotically righteous, so I prey to not to have to eat my boots. ",
            };
            let firstdial_options = await Template.ƒS.Menu.getInput(dial_options, "individualCSSClass");
            switch (firstdial_options) {
                case dial_options.dia_yes:
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "You ate your boots!!! And cursed yer quest! STRAYIN OFF THE PATH OF A KNIGHT GASSSSSPPP");
                    return Template.scn_hautdesert();
                    break;
                case dial_options.dia_no:
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "-righteous and religious noises. You resist munching your belt too. ");
                    chopped_head = true;
                    return Template.scn_hautdesert();
                    break;
                default:
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "You eat the horse. ");
                    break;
            }
        }
    }
    Template.scn_ExpWhatNot = scn_ExpWhatNot;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_greenchapel() {
        await Template.ƒS.Speech.tell(Template.characters.narrator, "You are at the green chapel! Good for you!");
        if (Template.dataGawain.belt_taken) {
            if (Template.dataGawain.kisses_given >= 2) {
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Scratches Ending");
            }
            if (Template.dataGawain.kisses_given <= 2) {
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Very Dead Ending");
            }
            if (Template.dataGawain.belt_taken) {
                if (Template.dataGawain.kisses_given = 3) {
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Righteous ending");
                }
                if (Template.dataGawain.awkward_idiocy = 3) {
                    await Template.ƒS.Speech.tell(Template.characters.narrator, "Awkward idiot ending");
                }
            }
        }
    }
    Template.scn_greenchapel = scn_greenchapel;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_hautdesert() {
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Unexpected castle! Not sus at all! YAY!");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Castle things happen");
        let dial_options = {
            dia_yes: "Lie. Lie.Lie. Absolutely and very much lie.",
            dia_no: "Don't explain but be righteous",
            dia_awkward: " Do you really want to awkwardly explain? ",
        };
        let firstday_options = await Template.ƒS.Menu.getInput(dial_options, "individualCSSClass");
        switch (firstday_options) {
            case dial_options.dia_yes:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "I only got this cookie, here. ");
                Template.dataGawain.lies_told += 1;
                break;
            case dial_options.dia_no:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "A very friendly kiss to Lord Bercilac");
                Template.dataGawain.kisses_given += 1;
                break;
            case dial_options.dia_awkward:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Erm, so you know, your wife kind of tried to seduce me and stuff.... ");
                Template.dataGawain.awkward_idiocy += 1;
            default:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "I seriously have no idea what are you doing. ");
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Second day happens.");
        let dial2_options = {
            dia_yes: "Lie. Lie.Lie. Again",
            dia_no: " Huh, you are being righteous. ",
            dia_awkward: " Hm. More humiliation, good sir? ",
        };
        let secondday_options = await Template.ƒS.Menu.getInput(dial2_options, "individualCSSClass");
        switch (secondday_options) {
            case dial2_options.dia_yes:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "I only got this func_GawaingetRandomCastleObject , here. ");
                Template.dataGawain.lies_told += 1;
                break;
            case dial2_options.dia_no:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "A very friendly kiss to Lord Bercilac. Handsome guy he is.");
                Template.dataGawain.kisses_given += 1;
                break;
            case dial2_options.dia_awkward:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "ERM. Your wife is back at it? is it fine with you and stuff?.... ");
                Template.dataGawain.awkward_idiocy += 1;
                break;
            default:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "I seriously have no idea what are you doing. ");
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Second day happens.");
        let dial3_options = {
            dia_yes: "Lie and KEEP THE SUS BELT",
            dia_veryno: "Admit belt. Give kiss. ",
            dia_no: " Yeh, well. Give a kiss, and hide the belt. ",
            dia_awkward: " I'm here for suffering ",
        };
        let thirdday_options = await Template.ƒS.Menu.getInput(dial3_options, "individualCSSClass");
        switch (thirdday_options) {
            case dial3_options.dia_yes:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Nothing happened, good Lord. N O T H I N G - nervous laughter-");
                Template.dataGawain.lies_told += 1;
                Template.dataGawain.belt_taken = true;
                return Template.scn_greenchapel();
                break;
            case dial3_options.dia_veryno:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "seriously, that beard *is* really impressive, right? and you are The Righteousness. Good work! One might say you are an idiot, but hey.");
                Template.dataGawain.kisses_given += 1;
                return Template.scn_greenchapel();
                break;
            case dial3_options.dia_no:
                await Template.ƒS.Speech.tell(Template.characters.narrator, " Okay, so at least give a kiss. And feel ashamed. C-c-c-c.  ");
                Template.dataGawain.kisses_given += 1;
                Template.dataGawain.lies_told += 1;
                Template.dataGawain.belt_taken = true;
                return Template.scn_greenchapel();
                break;
            case dial3_options.dia_awkward:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Okay, okay, FINE YOU PROBABLY KNOW IT ALREADY ");
                Template.dataGawain.awkward_idiocy += 1;
                return Template.scn_greenchapel();
            default:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "I seriously have no idea what are you doing. ");
                break;
        }
    }
    Template.scn_hautdesert = scn_hautdesert;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_teleport() {
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Wahhh this was some suspicious magic!");
        Template.dataMorgana.teleported = true;
        console.log("dataMorgana.teleported");
        console.log(Template.dataMorgana.teleported);
    }
    Template.scn_teleport = scn_teleport;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map