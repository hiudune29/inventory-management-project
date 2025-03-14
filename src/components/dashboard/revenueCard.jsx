import React from "react";

const RevenueCard = () => {
    return (
        <>
            <Card>
                <CardContent>
                    <h2 className="text-xl font-bold">Tổng Doanh Thu</h2>
                    <p className="text-2xl font-semibold">$50,000</p>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <h2 className="text-xl font-bold">Đơn Hàng</h2>
                    <p className="text-2xl font-semibold">1,200</p>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <h2 className="text-xl font-bold">Khách Hàng</h2>
                    <p className="text-2xl font-semibold">3,500</p>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <h2 className="text-xl font-bold">Sản Phẩm Bán Chạy</h2>
                    <p className="text-2xl font-semibold">Laptop</p>
                </CardContent>
            </Card>
  
        </>
    );
}
export default RevenueCard;