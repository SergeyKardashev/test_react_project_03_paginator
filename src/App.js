import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './App.css';
import Copy from './components/Copy/Copy';

function App() {
    const [currentPage, setCurrentPage] = useState(0);
    const [dataForDisplay, setDataForDisplay] = useState([]);

    const yourData = [
        { title: 'Статья 1', description: 'Описание статьи 1, интересные факты и полезная информация.' },
        { title: 'Статья 2', description: 'Описание статьи 2, новости технологий и инновации.' },
        { title: 'Статья 3', description: 'Описание статьи 3, советы по путешествиям и отдыху.' },
        { title: 'Статья 4', description: 'Описание статьи 4, обзоры книг и культурные события.' },
        { title: 'Статья 5', description: 'Описание статьи 5, рецепты и кулинарные эксперименты.' },
        { title: 'Статья 6', description: 'Описание статьи 6, тренировки и советы по здоровью.' },
        { title: 'Статья 7', description: 'Описание статьи 7, финансовые стратегии и инвестиции.' },
        { title: 'Статья 8', description: 'Описание статьи 8, обучение и развитие навыков.' },
        { title: 'Статья 9', description: 'Описание статьи 9, искусство, музыка и творчество.' },
        { title: 'Статья 10', description: 'Описание статьи 10, путеводители и экскурсии.' },
        { title: 'Статья 11', description: 'Описание статьи 11, IT новости и программирование.' },
        { title: 'Статья 12', description: 'Описание статьи 12, личностный рост и саморазвитие.' },
        { title: 'Статья 13', description: 'Описание статьи 13, дизайн и архитектура.' },
        { title: 'Статья 14', description: 'Описание статьи 14, мода, стиль и красота.' },
        { title: 'Статья 15', description: 'Описание статьи 15, кино, сериалы и развлечения.' },
        { title: 'Статья 16', description: 'Описание статьи 16, психология и отношения.' },
        { title: 'Статья 17', description: 'Описание статьи 17, наука и образование.' },
        { title: 'Статья 18', description: 'Описание статьи 18, путешествия и приключения.' },
        { title: 'Статья 19', description: 'Описание статьи 19, экология и устойчивое развитие.' },
        { title: 'Статья 20', description: 'Описание статьи 20, кулинария и гастрономия.' },
    ];

    const perPage = 3; // Количество элементов на странице
    // let pageCount;

    useEffect(() => {
        // Подготовка данных для текущей страницы
        const offset = currentPage * perPage;
        setDataForDisplay(yourData.slice(offset, offset + perPage));
        // pageCount = Math.ceil(dataForDisplay.length / perPage);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage]);

    // Обработчик изменения страницы
    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    return (
        <div id='container'>
            <div className="items">
                <Copy data={dataForDisplay} />
            </div>
            <ReactPaginate
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item previous-page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item next-page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                activeClassName="active"
                breakLabel="…"
                nextLabel={<svg xmlns="http://www.w3.org/2000/svg" width="6" height="13" fill="none"><path fill="#1A1B22" d="M.26 1a.834.834 0 0 0 0 1.179L4.08 6.004a.852.852 0 0 1 0 1.18L.26 11.007a.834.834 0 0 0 1.178 1.18L5.26 8.364a2.502 2.502 0 0 0 0-3.54L1.438 1A.833.833 0 0 0 .26 1Z" /></svg>}
                pageCount={Math.ceil(yourData.length / perPage)}
                previousLabel={<svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" fill="none"><path fill="#1A1B22" d="M5.982.945a.833.833 0 0 1-.245.59L1.916 5.356a.85.85 0 0 0 0 1.179l3.821 3.821a.833.833 0 0 1-1.178 1.179L.737 7.713a2.56 2.56 0 0 1 0-3.536L4.56.357a.833.833 0 0 1 1.423.588Z" /></svg>}
                renderOnZeroPageCount={null}
                containerClassName="pagination"
            />
        </div>
    );
}

export default App;
