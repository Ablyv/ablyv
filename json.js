import fs from 'fs';

export function createJson(name, data, identifier){
    fs.writeFile('flashcards/' +identifier+ '.json', data, (err) =>{
        if (err) throw err;
        console.log('Name: ' + name + ' has been added to flashcards')
    })
};

export function deleteJson(reason, identifier, name){
    try {
        fs.unlink('./flashcards/' +identifier+ '.json', (err) =>{
            if (err) throw err;
            console.log('[SUCCESS] ' + name + ' has been deleted from flashcards for ' + reason);
        });
    } catch (EISDER) {
        console.log('[ERROR] Illegal Operation on a Directory with file name ' + identifier);
    }
}