export const MainContainer = () => {
  return (
    <main className="px-3 ml-100%">
        <div className="container-fluid text-center">
          <h2>API Project: File Metadata Microservice</h2>
          <div className="mt-100px">
            <h4 id="output">Please Upload a File ...</h4>
            <form enctype="multipart/form-data" method="POST" action="/api/fileanalyse">
                <input className="btn btn-info" id="inputfield" type="file" name="upfile" />
              <div>
                <input className="btn btn-info" id="button" type="submit" value="Upload" />
              </div>

            </form>
          </div>
        </div>
      </main>
  )
}