package de.nordlb.backend.repository;

import de.nordlb.backend.model.ApplicationData;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest(properties = {"ALLOWED_ORIGINS=''"})
class ApplicationDataRepositoryTest {

    @Autowired
    private ApplicationDataRepository applicationDataRepository;

    @BeforeEach
    void setUp() {
        applicationDataRepository.deleteAll();
        applicationDataRepository.save(new ApplicationData("Persisted information"));
    }

    @Test
    void testFetch() {
        List<ApplicationData> applicationDataList = applicationDataRepository.findAll();
        assertEquals(1, applicationDataList.size());
        assertEquals("Persisted information", applicationDataList.get(0).getInformation());
    }
}