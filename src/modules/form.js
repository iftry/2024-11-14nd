const form = ()=>{
    return `
    <div class="mb-3 py-5">
        <input type="text" class="form-control term" placeholder="Search for meal" >
    </div>
    <div class="mb-3 py-5">
        <input type="text" class="form-control result" readonly >
    </div>
    <button type="submit" class="btn btn-warning">Search</button>`
        
}

export default form

//      `<input class="form-control" type="search" placeholder="Search" aria-label="Search">`