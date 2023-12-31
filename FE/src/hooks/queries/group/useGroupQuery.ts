import { getGroup } from "@/api/group";
import { QueryKey } from "@/constants/queryKey";
import { Group } from "@/types/group";
import { useQuery } from "@tanstack/react-query";

// 모집 공고 조회
const useGroupQuery = (groupId: Group["groupId"]) => {
  const query = useQuery<Group>({
    queryKey: QueryKey.useGroupQuery(groupId),
    queryFn: () => getGroup(groupId),
    // 0일때 제외
    enabled: groupId ? true : false,
  });

  return query;
};

export default useGroupQuery;
