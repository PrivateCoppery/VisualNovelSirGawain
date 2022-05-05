namespace Template{

    export async function scn_teleport():ƒS.SceneReturn { 

        await ƒS.Speech.tell(characters.narrator, "Wahhh this was some suspicious magic!");
        dataMorgana.teleported = true;

        console.log("dataMorgana.teleported")
        console.log(dataMorgana.teleported)




    }
}