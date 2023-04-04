package de.nordlb.backend.repository;

import de.nordlb.backend.model.ApplicationData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationDataRepository extends JpaRepository<ApplicationData, Long> {
}