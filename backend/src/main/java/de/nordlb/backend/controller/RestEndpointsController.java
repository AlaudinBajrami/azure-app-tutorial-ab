package de.nordlb.backend.controller;

import de.nordlb.backend.core.IsReader;
import de.nordlb.backend.core.IsWriter;
import de.nordlb.backend.model.ApplicationData;
import de.nordlb.backend.repository.ApplicationDataRepository;
import de.nordlb.backend.service.KafkaAdminService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping(value = "/api")
public class RestEndpointsController {

    @Autowired
    private ApplicationDataRepository applicationDataRepository;

    @Autowired
    private KafkaAdminService kafkaAdminService;

    /**
     * Check whether the backend is alive.
     *
     * @return id of session. This should be maintained between requests from the same origin.
     */
    @GetMapping("/is-alive")
    public String livelinessProbe(HttpSession session) {
        return session.getId();
    }

    @GetMapping("/read")
    @IsReader
    public String readSecuredInformation(){
        List<ApplicationData> applicationDataList=applicationDataRepository.findAll();
        if(applicationDataList.isEmpty())
            return"If you can see this text, you are authenticated to read (write right includes read). But no data has been witten to database yet";
        else
            return applicationDataList.get(0).getInformation();
    }

    @PostMapping("/write")
    @IsWriter
    public String write(){
        applicationDataRepository.deleteAll();
        applicationDataRepository.save(new ApplicationData("New information written to database at "+ LocalDateTime.now().toString()));
        return"Data written to database";


        @GetMapping("/topics")
        @IsReader
        public ResponseEntity<String> readKafkaTopics(){
            try{
                return String.valueOf(new ResponseEntity<>(kafkaAdminService.listOfTopics().toString(), HttpStatus.OK));
            }catch(ExecutionException | InterruptedException e){
                e.printStackTrace();
            }
            return String.valueOf(new ResponseEntity<>(HttpStatus.NOT_FOUND)); //???
        }

    }
}
