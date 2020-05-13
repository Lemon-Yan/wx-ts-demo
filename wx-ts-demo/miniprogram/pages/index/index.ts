// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

interface IIndexData {
  aa: string,
  bb: number
}

class IIndex {
  data: IIndexData = {
    aa: 'hello index',
    bb: 123
  }
  onLoad(): void {
    console.log(this.data.aa);
    console.log(this.data.bb);
  }
  openNewPage(e: any): any {
    console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      url: "../newpage/newpage?id=333"
    })
  }
}
Page(new IIndex())
