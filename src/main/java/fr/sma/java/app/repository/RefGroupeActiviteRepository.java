package fr.sma.java.app.repository;

import fr.sma.java.app.domain.RefGroupeActivite;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the RefGroupeActivite entity.
 */
@SuppressWarnings("unused")
@Repository
public interface RefGroupeActiviteRepository extends JpaRepository<RefGroupeActivite, Long> {

}
