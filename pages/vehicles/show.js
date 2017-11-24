import testDrive from '../../modules/test-drive';
const app = getApp();
Page({
    data:{
        entity : null,
    },
    onLoad(options){
        const  id = options.id;
        const entity = app.globalData.vehicles.filter((vehicle)=>{
            return id == vehicle.id;
        });
        console.log(entity);
        this.setData({
            entity: entity[0],
        });
        console.log(this.data.entity);
        // wx.setNavigationBarTitle({
        //     title: this.data.entity.header,
        //   })

    },
})