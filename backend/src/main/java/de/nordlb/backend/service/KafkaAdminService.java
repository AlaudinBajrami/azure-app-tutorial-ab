package de.nordlb.backend.service;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Properties;
import java.util.Set;
import java.util.concurrent.ExecutionException;

@Service
public class KafkaAdminService {

    @Value(value = "${kafka.bootstrapAddress}")
    private String bootstrapAddress;

    public Set<String> listOfTopics() throws ExecutionException, InterruptedException {

        Properties properties = new Properties();
        Properties.put(AdminClientConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapAddress);

        AdminClient adminClient = AdminClient.create(properties);

        ListTopicsOptions listTopicsOptions = new ListTopicsOptions();
        listTopicsOptions.listInternal(true);

        return adminClient.listTopics(listTopicsOptions).names().get();
    }
}
