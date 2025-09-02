import React, { useMemo, useState } from 'react'

const App = () => {
    // 表格資料
    const arrProd = [
        {
            id: 1,
            prodName: '帽子',
            prodPrice: 800,
            prodImgUrl: './images/1.png'
        },
        {
            id: 2,
            prodName: '帽子',
            prodPrice: 700,
            prodImgUrl: './images/2.png'
        },
        {
            id: 3,
            prodName: '帽子',
            prodPrice: 600,
            prodImgUrl: './images/3.png'
        },
        {
            id: 4,
            prodName: '帽子',
            prodPrice: 500,
            prodImgUrl: './images/2.png'
        }
    ]
    // 表格元件
    const ProdTable = ({ ascFilterProds }) => {
        return (
            <table style={{ width: '500px', marginTop: '20px' }}>
                <tbody>
                    {/* jsx中撰寫js語法，必須先打一組大括號{} */}
                    {
                        ascFilterProds.map((prod) => {
                            return (
                                <tr key={prod.id}>
                                    <td
                                        style={{
                                            borderBottom: '1px dashed #ccc',
                                            padding: '5px',
                                            width: '100px',
                                        }}>{prod.prodName}</td>
                                    <td
                                        style={{
                                            borderBottom: '1px dashed #ccc',
                                            padding: '5px',
                                            width: '300px',
                                        }}>
                                        <img src={prod.prodImgUrl} alt=""
                                            style={{ width: '120px' }} />
                                    </td>
                                    <td
                                        style={{
                                            borderBottom: '1px dashed #ccc',
                                            padding: '5px',
                                            width: '100px',
                                        }}>{prod.prodPrice}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }

    // 陣列變數
    const [prods, setProds] = useState(arrProd);
    // 排序變數
    const [ascending, setAscending] = useState(true);

    const [search, setSearch] = useState('');
    // 
    const ascFilterProds = useMemo(() => {
        return [...prods]
            .sort((a, b) => {
                // 排序 
                return ascending ? a.prodPrice - b.prodPrice : b.prodPrice - a.prodPrice
            })
            // 搜尋
            .filter((prod) => {
                // 保留搜尋文字 去找資料庫
                return prod.prodName.match(search);

            })
    }, [ascending, search])

    return (
        <div className='wrap'>
            排序:
            <input
                type="checkbox"
                // 綁定排序變數
                checked={ascending}
                // 當checkbox有異動時更新
                onChange={(e) => { setAscending(e.target.checked) }}

            />
            <br />
            搜尋:
            <input type="text"
                value={search}
                // 文字方塊有異動，更新搜尋變數
                onChange={(e) => setAscending(e.target.checked)}
            />

            {/* 表格 */}
            <ProdTable ascFilterProds={ascFilterProds} />

        </div>
    )
}

export default App