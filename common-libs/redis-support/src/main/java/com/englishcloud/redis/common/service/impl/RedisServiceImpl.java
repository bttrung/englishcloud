package com.englishcloud.redis.common.service.impl;

import org.springframework.stereotype.Service;

/**
 *
 * @author Trung Bui Thanh
 */
@Service
public class RedisServiceImpl extends AbstractRedisService {

    @Override
    public String getRedisServers() {
        return "Redis Servers XXX";
    }

}
