import React, { useState } from 'react';
import styled from 'styled-components';

const BlogSection = styled.div`
  width: 100%;
  padding: 0px 100px;
  @media (max-width: 576px) {
    padding: 0px 20px;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 16px;
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    width: 60%;
    height: 4px;
    background: #6c5ce7;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? '#6c5ce7' : '#f0f0f0'};
  color: ${props => props.active ? '#fff' : '#333'};
  border: none;
  padding: 8px 20px;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 500;

  &:hover {
    background: ${props => props.active ? '#6c5ce7' : '#e0e0e0'};
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const BlogCard = styled.div`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const BlogImage = styled.div`
  height: 200px;
  position: relative;
  overflow: hidden;
`;

const BlogImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${BlogCard}:hover & {
    transform: scale(1.05);
  }
`;

const BlogCategory = styled.span`
  position: absolute;
  top: 15px;
  left: 15px;
  background: #6c5ce7;
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const BlogContent = styled.div`
  padding: 24px;
`;

const BlogDate = styled.span`
  color: #888;
  font-size: 0.85rem;
  display: block;
  margin-bottom: 10px;
`;

const BlogTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 15px;
  transition: color 0.3s ease;

  ${BlogCard}:hover & {
    color: #6c5ce7;
  }
`;

const BlogExcerpt = styled.p`
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const BlogLink = styled.a`
  color: #6c5ce7;
  font-weight: 600;
  display: inline-flex;
  align-items: center;

  &:after {
    content: '→';
    margin-left: 6px;
    transition: transform 0.3s ease;
  }

  &:hover:after {
    transform: translateX(4px);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  max-width: 600px;
  margin: 100px auto;
  position: relative;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
`;

const BlogPost = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedPost, setSelectedPost] = useState(null);

    const categories = [
        { id: 'all', name: 'Все' },
        { id: 'technology', name: 'Технологии' },
        { id: 'design', name: 'Дизайн' },
        { id: 'productivity', name: 'Продуктивность' },
        { id: 'travel', name: 'Путешествия' }
    ];

    const posts = [
        {
            id: 1,
            title: 'Как React изменил мой подход к веб-разработке',
            excerpt: 'Делюсь опытом и мыслями о том, как React революционизировал способ создания современных веб-приложений.',
            date: '15 апреля 2025',
            category: 'technology',
            image: 'https://i.pinimg.com/736x/9e/0b/e5/9e0be52e32b30161d93701b79413f57f.jpg'
        },
        {
            id: 2,
            title: 'Принципы минимализма в UI дизайне',
            excerpt: 'Разбираем ключевые принципы и практики создания минималистичных и эффективных пользовательских интерфейсов.',
            date: '8 апреля 2025',
            category: 'design',
            image: 'https://i.pinimg.com/736x/15/23/b2/1523b20ee4b5e4a575871fdc79b7358c.jpg'
        },
        {
            id: 3,
            title: 'Система планирования, которая действительно работает',
            excerpt: 'Рассказываю о методике планирования задач, которая помогла мне повысить продуктивность в несколько раз.',
            date: '2 апреля 2025',
            category: 'productivity',
            image: 'https://i.pinimg.com/736x/de/90/43/de904392b25799cdef70ac910baa4eca.jpg'
        },
        {
            id: 4,
            title: 'Неизведанные уголки Португалии',
            excerpt: 'Делюсь впечатлениями от путешествия по маленьким городам Португалии, о которых редко пишут в путеводителях.',
            date: '25 марта 2025',
            category: 'travel',
            image: 'https://i.pinimg.com/736x/50/41/82/504182b20a6c9912f43f3532b097f5c8.jpg'
        },
        {
            id: 5,
            title: 'Styled-Components: стилизация React компонентов',
            excerpt: 'Погружаемся в мир CSS-in-JS и разбираемся в преимуществах использования styled-components в React-проектах.',
            date: '18 марта 2025',
            category: 'technology',
            image: 'https://i.pinimg.com/736x/a7/f5/4e/a7f54ec0431ca68f5ad865d604da1572.jpg'
        },
        {
            id: 6,
            title: 'Цветовые тренды в дизайне 2025 года',
            excerpt: 'Анализ актуальных цветовых палитр и трендов в визуальном дизайне в текущем году.',
            date: '10 марта 2025',
            category: 'design',
            image: 'https://i.pinimg.com/736x/94/b2/29/94b229a5e58d5164202b5c75f0b24811.jpg'
        }
    ];

    const filteredPosts = activeFilter === 'all'
        ? posts
        : posts.filter(post => post.category === activeFilter);

    return (
        <BlogSection>
            <SectionHeader>
                <SectionTitle>Последние публикации</SectionTitle>
                <SectionSubtitle>
                    Делюсь мыслями, идеями и опытом на различные темы, от технологий до путешествий
                </SectionSubtitle>
            </SectionHeader>

            <FilterContainer>
                {categories.map(category => (
                    <FilterButton
                        key={category.id}
                        active={activeFilter === category.id}
                        onClick={() => setActiveFilter(category.id)}
                    >
                        {category.name}
                    </FilterButton>
                ))}
            </FilterContainer>

            <BlogGrid>
                {filteredPosts.map(post => (
                    <BlogCard key={post.id} onClick={() => setSelectedPost(post)}>
                        <BlogImage>
                            <BlogImg src={post.image} alt={post.title} />
                            <BlogCategory>
                                {categories.find(cat => cat.id === post.category).name}
                            </BlogCategory>
                        </BlogImage>
                        <BlogContent>
                            <BlogDate>{post.date}</BlogDate>
                            <BlogTitle>{post.title}</BlogTitle>
                            <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                            <BlogLink href="#">Читать далее</BlogLink>
                        </BlogContent>
                    </BlogCard>
                ))}
            </BlogGrid>

            {selectedPost && (
                <Overlay onClick={() => setSelectedPost(null)}>
                    <ModalContainer onClick={e => e.stopPropagation()}>
                        <CloseBtn onClick={() => setSelectedPost(null)}>×</CloseBtn>
                        <h2>{selectedPost.title}</h2>
                        <p>{selectedPost.date}</p>
                        <img src={selectedPost.image} alt={selectedPost.title} style={{ width: '100%', borderRadius: '8px', margin: '20px 0' }} />
                        <p>{selectedPost.excerpt}</p>
                    </ModalContainer>
                </Overlay>
            )}
        </BlogSection>
    );
};

export default BlogPost;
