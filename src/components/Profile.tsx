import styled from "styled-components";

const Profile = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    .user-img{
        width: 36px;
        height: 36px;
        position: relative;
        border-radius: 50%;
        overflow: hidden;
    }
    .user-img img{
        width: 100%;
    }
    .user{
        position: relative;
    }
    .user:focus ul, .user:focus-within ul{
        opacity: 1;
        transform: translateY(110%);
        visibility: visible;
    }
    .user ul{
        visibility: hidden;
        list-style: none;
        padding: 8px;
        margin: 0;
        background-color: #1f2531;
        box-shadow: 0 2px 10px rgba(0, 0, 0, .3);
        text-align: left;
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translateY(80%);

        opacity: 0;
        transition: .1s;
        z-index: 10000;
    }
    .user a{
        display: block;
        padding: 8px 16px;
    }
    .user a:hover{
        background-color: ${props => props.theme.colors.main};
    }
`;

export default Profile;