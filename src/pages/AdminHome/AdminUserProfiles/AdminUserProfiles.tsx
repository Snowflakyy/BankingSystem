import { connect } from "react-redux";
import { UsersTable } from "../../creativeTim/examples/Table";
import React, { useEffect, useState } from "react";
import { RootState } from "../../../actions/store";
import * as _actions from "../../../actions/DUser(after)";
import { DUserAfterState } from "../../../types";
import { useAuth } from "../../../hooks/useAuth";
import { Outlet } from "react-router-dom";
import { ChildrenProps } from "@/types/children";
export interface MappedUser extends Omit<DUserAfterState, 'accounts' | 'loans'> {
  accounts: number;
  loans: number;
}

export type MappedUserKey = keyof MappedUser;
export interface Column {
  id: MappedUserKey;
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

export interface Data {
  name: string;
  id: number;
  active_loans: number;
  pending_loans: number;
  accounts: number;
}
//icon+FullName, Active Loans, Pending Loans, Accounts
const columns: Column[] = [
  { id: "id", label: "User Id", minWidth: 30 },

  { id: "fullName", label: "FullName", minWidth: 170 },
  { id: "accounts", label: "Accounts", minWidth: 100 },
  { id: "loans", label: "Loans", minWidth: 100 },
  { id: "isEmployed", label: "Employment Status", minWidth: 100 },
  { id: "email", label: "Email", minWidth: 100 },
];

const AdminUserProfilesToBeConnected = (props: any) => {
  const { user, isLoading: authLoading } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState<MappedUser[]>([]);
  useEffect(() => {
    console.log("CardProps are ", userInfo);
  }, [userInfo]);
  // balance is optional, so you can leave it out or initial
  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        console.log("The user after authorization is: ", user);
        try {
          await props.getUsers();
          if (props.dUserList) {
            const mappedUserInfo: MappedUser[] = props.dUserList.map((user: DUserAfterState) => ({
              ...user,
              accounts: user.accounts ? user.accounts.length : 0,
              loans: user.loans ? user.loans.length : 0,
            }));
            console.log("Mapped user is: ",mappedUserInfo)
            setUserInfo(mappedUserInfo);
          }
        } catch (error) {
          console.log("Error handling fetching accounts:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    if (!authLoading) {
      fetchData();
    }
  }, [user, authLoading, props.getUsers,]);

  if (authLoading || isLoading) {
    return <div>Loading...</div>;
  }
  return <UsersTable headers={columns} body={userInfo} />;
};
const mapStateToProps = (state: RootState) => {
  return {
    dUserList: state.DUserA.users,
  };
};
const mapActionsToProps = {
  getUsers: _actions.fetchAll,

  // updateduSer:_actions.update,
};
export const AdminUserProfiles = connect(
  mapStateToProps,
  mapActionsToProps
)(AdminUserProfilesToBeConnected);
