

addPost(title: string, content: string){
    const post: Post={id: null, title: title, content: content};
    this.http.post<{message: string} ('http://localhost:3000/posts')
    this.postspush(post);
    this.postUpdated.next([...this.posts]);
}
