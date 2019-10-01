import Realm from 'realm';

const ListLiked = {
    name: 'Comic',
    primaryKey: 'mal_id',
    properties: {
        mal_id: 'int',
        image: 'string',
        title: 'string',
        type: 'string'
    }
}

const getAllComic = () => {
    return Realm.open({ schema: [ListLiked] })
        .then(realm => {
            return realm.objects('Comic');
        })
        .catch(err => {
            console.log("err", err);
            return;
        })
}

const searchComic = (id) => {
    return Realm.open({ schema: [ListLiked] })
        .then(realm => {
            return realm.objectForPrimaryKey('Comic', id);
        })
        .catch(err => {
            console.log("err", err);
            return;
        })
}

const addComic = (comic) => {
    return Realm.open({ schema: [ListLiked] })
        .then(realm => {
            realm.write(() => {
                realm.create('Comic', {
                    mal_id: comic.mal_id,
                    image: comic.image_url,
                    title: comic.title,
                    type: comic.type,
                });
            });
            return true;
        })
        .catch(err => {
            console.log("err", err);
            return;
        })
}

const deleteComic = (id) => {
    return Realm.open({ schema: [ListLiked] })
        .then(realm => {
            realm.write(() => {
                let _comic = realm.objectForPrimaryKey('Comic', id);
                realm.delete(_comic);
            });
            return true;
        })
        .catch(err => {
            console.log("err", err);
            return;
        })
}

export { getAllComic, searchComic, addComic, deleteComic }