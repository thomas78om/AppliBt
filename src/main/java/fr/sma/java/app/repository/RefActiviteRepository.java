package fr.sma.java.app.repository;

import fr.sma.java.app.domain.RefActivite;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the RefActivite entity.
 */
@SuppressWarnings("unused")
@Repository
public interface RefActiviteRepository extends JpaRepository<RefActivite, Long> {

}
