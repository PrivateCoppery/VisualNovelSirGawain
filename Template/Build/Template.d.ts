declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
declare namespace Template {
    let characters: {
        narrator: {
            name: string;
        };
        Morgana: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
            };
        };
        Crowley: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
            };
        };
    };
}
declare namespace Template {
    let dataForSave: {
        nameProtagonist: string;
        points: number;
        scoreeyyy: number;
        varHadTea: boolean;
    };
    let dataGawain: {
        cursed_quest: boolean;
        belt_taken: boolean;
        head_chopped: boolean;
        kisses_given: number;
        lies_told: number;
        awkward_idiocy: number;
    };
    let dataMorgana: {
        teleported: boolean;
        disguised: boolean;
        head_chopped: boolean;
    };
}
declare namespace Template {
    function scn_ExpWhatNot(): ƒS.SceneReturn;
}
declare namespace Template {
    function scn_greenchapel(): ƒS.SceneReturn;
}
declare namespace Template {
    function scn_hautdesert(): ƒS.SceneReturn;
}
declare namespace Template {
    function scn_teleport(): ƒS.SceneReturn;
}
