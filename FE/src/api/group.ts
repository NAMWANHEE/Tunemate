import {
  Group,
  GroupAnnouncement,
  Participation,
  ParticipationRequest,
  ParticipationResponse,
} from "@/types/group";
import { api } from ".";

const GROUP_URL = "group-service/groups";

// 모집 공고 생성
export const createGroup = async (groupAnnouncement: GroupAnnouncement) => {
  await api.post<void>(GROUP_URL, groupAnnouncement);
};

// 모집 공고 목록 조회
export const getGroups = async (): Promise<Group[]> => {
  const response = await api.get<Group[]>(GROUP_URL);
  return response.data;
};

// 모집 공고 수정
export const updateGroup = async ({
  groupId,
  groupAnnouncement,
}: {
  groupId: Group["groupId"];
  groupAnnouncement: GroupAnnouncement;
}) => {
  await api.put<void>(`${GROUP_URL}/${groupId}`, groupAnnouncement);
};

// 모집 공고 삭제
export const deleteGroup = async (groupId: Group["groupId"]) => {
  await api.delete<void>(`${GROUP_URL}/${groupId}`);
};

// 모집 공고 마감
export const deadlineGroup = async (groupId: Group["groupId"]) => {
  await api.patch<void>(`${GROUP_URL}/${groupId}`);
};

// 모집 공고 조회
export const getGroup = async (groupId: Group["groupId"]): Promise<Group> => {
  const response = await api.get<Group>(`${GROUP_URL}/${groupId}`);
  return response.data;
};

// 참여 요청
export const participateGroup = async (groupId: Group["groupId"]) => {
  await api.post<void>(`group/participation/${groupId}`);
};

// 받은 참여 요청 조회
export const getGroupReceivedParticipations = async (): Promise<
  ParticipationRequest[]
> => {
  const response = await api.get<ParticipationRequest[]>(
    `group/received-participations`
  );
  return response.data;
};

// 보낸 참여 요쳥 목록 조회
export const getGroupSentParticipations = async (): Promise<
  ParticipationResponse[]
> => {
  const response = await api.get<ParticipationResponse[]>(
    `group/sent-participations`
  );
  return response.data;
};

// 참여 요청 수락
export const acceptGroupParticipation = async (
  participationId: Participation["participationId"]
) => {
  await api.post(`group/participations/${participationId}/acceptance`);
};

// 참여 요청 거절
export const rejectGroupParticipation = async (
  participationId: Participation["participationId"]
) => {
  await api.post(`group/partidipations/${participationId}/rejection`);
};

// 참여중인 공고 조회
export const getMyGroups = async (): Promise<Group[]> => {
  const response = await api.get<Group[]>(`${GROUP_URL}/my-groups`);
  return response.data;
};

// 참여중인 공고 탈퇴
export const leaveMyGroup = async (groupId: Group["groupId"]) => {
  await api.post<void>(`group/my-groups/${groupId}`);
};
