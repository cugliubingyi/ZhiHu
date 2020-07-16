import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Card = styled.ul`
  width: 320px;
  margin-bottom: 10px;
  padding: 10px 0;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0 1px 3px #bbb;
`;

const NavItem = styled.li`
  width: 100%;
  height: 40px;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #f6f6f6;
  }
  &:hover .navTag {
    background: #fff;
  }
`;

const NavTitle = styled.div`
  display: flex;
  color: #868686;
  i {
    margin-right: 10px;
  }
`;

const NavTag = styled.div`
  height: 30px;
  padding: 0 10px;
  background: #f6f6f6;
  color: #868686;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SideBarNavList = (props) => {
  const collections = useSelector(state => state.user.collections);
  const attentions = useSelector(state => state.user.attentions);
  const invitations = useSelector(state => state.user.invitations);

  const navList = useMemo(() => {
    return [
      {
        navIcon: "icon-shoucang",
        navText: "我的收藏",
        navNum: collections,
      },
      {
        navIcon: "icon-changjianwenti",
        navText: "我关注的问题",
        navNum: attentions,
      },
      {
        navIcon: "icon-yaoqing",
        navText: "我的邀请",
        navNum: invitations,
      },
      {
        navIcon: "icon-qianbao",
        navText: "我的余额",
      },
      {
        navIcon: "icon-xiaoxi2",
        navText: "站务中心",
      },
      {
        navIcon: "icon-erji",
        navText: "帮助中心",
      },
      {
        navIcon: "icon-banquan-kuai",
        navText: "版权服务中心",
      },
    ];
  }, [collections, attentions, invitations]);
  return (
    <Card>
      {navList.map(navItem => {
        return (
          <NavItem key={navItem.navText}>
            <NavTitle>
              <i className={`iconfont ${navItem.navIcon}`}></i>
              <div>{navItem.navText}</div>
            </NavTitle>
            {typeof navItem.navNum === "number" ?
              <NavTag className="navTag">{navItem.navNum}</NavTag>
              : null
            }
          </NavItem>
        )
      })}
    </Card>
  );
};

export default SideBarNavList;
