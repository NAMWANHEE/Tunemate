package com.tunemate.social.tunematesocial.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tunemate.social.tunematesocial.entity.Friend;

public interface FriendRepository extends JpaRepository<Friend, Long> {
	List<Friend> findByUser1Id(String myId);

	List<Friend> findByUser2Id(String myId);
}
