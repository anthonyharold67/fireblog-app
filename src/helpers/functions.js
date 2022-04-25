import firebase from './firebase';
import { getDatabase,ref,push,set,onValue, remove,update } from "firebase/database";
import { useState } from 'react';
import { useEffect } from 'react';
import {toastSuccessNotify}  from "./ToastNotify";


export const AddBlog=(info)=>{
  const db = getDatabase();
  const blogRef = ref(db,"blog");
  const newBlogRef= push(blogRef);
  set((newBlogRef),{
    title: info.title,
    imageUrl: info.imageUrl,
    email: info.email,
    content: info.content,
    date: info.date,
    favorites: info.favorites
  })
  toastSuccessNotify("Add blog successfully")
  
  
}

export const useFetch = ()=>{
    const [isLoading,setIsLoading] = useState();
    const [blogList,setBlogList] =useState()
    useEffect(()=>{
        setIsLoading(true);
        const db = getDatabase();
        const blogRef = ref(db,"blog");
        onValue(blogRef,(snapshot)=>{
            const data = snapshot.val();
            const blogArr = [];
            for(let id in data){
                blogArr.push({
                    id,
                    ...data[id]
                })
            }
            setBlogList(blogArr);
            console.log(data);
            setIsLoading(false);
        })

    },[])
    return {isLoading,blogList}
}

export const DeleteBlog = (id)=>{
    const db= getDatabase();
    remove(ref(db,"blog/"+id));
    toastSuccessNotify("Delete blog successfully");
}

export const UpdateBlog = (info)=>{
    const db= getDatabase();
    const updates = {}
    updates['/blog/'+info.id]=info;
    toastSuccessNotify("Update blog successfully");
    return update(ref(db), updates);
}

export const updateFavorites = (info)=>{
    const db= getDatabase();
    const updates = {}
    console.log(info)
    console.log(info.favorites)
    updates['/blog/'+info.id]={...info,
    favorites: info.favorites+1};
    return update(ref(db), updates);
}
