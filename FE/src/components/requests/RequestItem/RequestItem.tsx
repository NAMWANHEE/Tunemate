import ProfileImage from "@/components/image/ProfileImage/ProfileImage";
import useAnotherUserInfoQuery from "@/hooks/queries/user/useAnotherUserInfoQuery";
import Props from "@/types";
import { UserInfo } from "@/types/user";
import { classNameWrapper } from "@/utils/className";
import styles from "./RequestItem.module.css";
import Button from "@/components/button/Button";
import { useRouter } from "next/router";
import { MouseEvent, useCallback } from "react";
import Icon from "@/components/icons";

interface RequestItem {
  userId: UserInfo["userId"];
  name: UserInfo["name"];
  param?: string;
  musicalTasteSimilarity?: string;
}

interface RequestItemProps extends Props {
  item: RequestItem;
  onAccept?: (userId: UserInfo["userId"]) => void;
  onDecline?: (userId: UserInfo["userId"]) => void;
}

const RequestItem = ({ item, onAccept, onDecline, className }: RequestItemProps) => {
  const { data: userInfo } = useAnotherUserInfoQuery(item.userId);
  const router = useRouter();

  const onClick = useCallback((e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    e.preventDefault();
    router.push(`/profile/${item.userId}`);
  }, []);

  return (
    <li className={classNameWrapper(styles["request-item"], className)} onClick={onClick}>
      {userInfo && (
        <>
          <ProfileImage
            className={styles["request-item__image"]}
            src={userInfo.imageUrl}
            alt={userInfo.name}
            type="friend"
          />
          <p className={styles["request-item__name"]}>{item.name}</p>
          {item?.musicalTasteSimilarity && (
            <span className={styles["request-item__similarity"]}>
              {(Number(item.musicalTasteSimilarity) * 100).toFixed(0)}
              <Icon.Music size="lg" />
            </span>
          )}
          <div className={styles["request-item__button-container"]}>
            {onAccept && (
              <Button
                className={styles["request-item__button"]}
                onClick={(e) => {
                  e.stopPropagation();
                  onAccept(item?.param ?? item.userId);
                }}
                color="blue"
              >
                수락
              </Button>
            )}
            {onDecline && (
              <Button
                className={styles["request-item__button"]}
                onClick={(e) => {
                  e.stopPropagation();
                  onDecline(item?.param ?? item.userId);
                }}
                color="red"
              >
                거절
              </Button>
            )}
          </div>
        </>
      )}
    </li>
  );
};

export default RequestItem;