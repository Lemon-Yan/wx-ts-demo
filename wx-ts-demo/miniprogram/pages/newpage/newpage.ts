// newpage.ts
interface INewPageData {
  
}

class INewPage {
  data: INewPageData = {
    
  }
  onLoad(options:any):void {
    console.log(options);
  }
}
Page(new INewPage())
