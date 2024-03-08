

addPost(title: string, content: string){
    const post: Post={id: null, title: title, content: content};
    this.http.post<{message: string} ('http://localhost:3000/posts', post)
    .subscribe((responseData)=>{
        console.log(responseData.message);
    });
    this.posts.push(post);
    this.postUpdated.next([...this.posts]);
}
