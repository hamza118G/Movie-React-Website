        import styled from "styled-components";

export const Wrapper = styled.div`
   
       background-image: url(${({ image }) => image});
       background-color: var(--darkGrey);

        background-size : 100% , cover;
        background-Position: center;
        background-repeat:no-repeat;
        height:600px;
        object-fit:cover;
        position: relative;
        animation: animationHeroImage 1s;

        @keyframes animationHeroImage{
            from{
                opacity: 0;
            }
            to{
                opacity:1;
            
            }
        }
`;

export const Content = styled.div`
        padding: 20px;
        max-width: var(--max-width);
        margin: 0 auto;


`;

export const Text = styled.div`
        z-index: 100;
        max-width: 700px;
        position: absoulte;
        bottom: 40px;
        margin-right: 20px;
        min-height: 100px;
        color: var(--white);

        h1{
            font-size: var(--fontSuperBig);

            @media screen and (max-width: 720px){
                font-size: var(--fontBig)
            }
        }

        p{
            font-size: var(--fontMed);

            @media screen and (max-width: 720px){
                font-size: var(--fontSmall);
            }
        }

            @media screen and (max-width: 720px){
                width:100%
        }
        `;  


