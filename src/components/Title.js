import React from "react"
import styled from "styled-components"

export const Title = ({ title, subTitle, className }) => {
  return (
    // <TitleWrapper>
    <div className={className}>
      <h4>
        <span className="title">{title}</span>
        <span>{subTitle}</span>
      </h4>
    </div>
    // </TitleWrapper>
  )
}
// const TitleWrapper = styled.div`
export default styled(Title)`
  text-transform: uppercase;
  font-size: 2.3rem;
  margin-bottom: 2rem;
  h4 {
    text-align: center;
    letter-spacing: 7px;
    color: var(--primaryColor);
  }
  .title {
    color: var(--mainBlack);
  }
  span {
    display: block;
  }
  @media (min-width: 576px) {
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`
// export default Title
